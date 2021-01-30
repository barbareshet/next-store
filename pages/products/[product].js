import fs from "fs";
import matter from "gray-matter";
import  marked from "marked";
import styled from "styled-components";
import Image from 'next/image'
const imgFolder = "/img/";
const ProductContainer = styled.div`
    
`
const Col = styled.div`
    width:50%;
    float: left;
`
const Row = styled.div`
    width:100%;
    padding: 15px;
`
const Product = ({ product: { data, content }}) => {
    // console.log(props);
    const html = marked(content);
    return(
        <ProductContainer>
            <Col>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <p>{data.price / 100 }&#x20aa;</p>
                <div dangerouslySetInnerHTML={{__html:html}}/>
            </Col>
            <Col>
                <Image src={imgFolder+data.img}
                       width={450}
                       height={650}/>
            </Col>


        </ProductContainer>
    )
}
export default Product;

export const getStaticPaths = () => {
    const contentDirectory = `${process.cwd()}/content`
    const fileNames = fs.readdirSync(contentDirectory);
    const paths = fileNames.map(fileName => {
        return{
            params:{
                product: fileName.replace('.md', ''),
            },
        }
    });
    return{
        paths,
        fallback:false,
    }
}


export const getStaticProps = async (context) => {
    const productName = context.params.product;
    const filePath = `${process.cwd()}/content/${productName}.md`;
    const fileContent = fs.readFileSync(filePath).toString();
    const { data, content } = matter(fileContent);
    return{
        props:{
            product: {
                data,
                content
            }
        }
    }
}