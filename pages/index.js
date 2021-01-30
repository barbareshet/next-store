import fs from "fs";
import matter from "gray-matter"
import Link from "next/link";
import styled from "styled-components";
import Image from 'next/image'
const imgFolder = "/img/";
const ProductsContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-between; 
`

const Card = styled.div`
    max-width:23%;
    text-align:center;
    width: 100%;
    
    a{
        color:#fff;
        text-decoration:none;
        h3{
            font-weight:400;
        }
    }
`
const HomePage = (props) => {
    // console.log(props)
    return(
        <div>
            <h1>Welcome to Next Store</h1>
            <ProductsContainer>
                {props.products.map( (product) => {
                    return (
                        <Card className="product" key={product.slug}>
                            <Image src={imgFolder+product.img}
                                   width={250}
                                    height={300}/>
                            <Link href={product.slug}>
                                <a>
                                    <h3>{product.name}</h3>
                                </a>
                            </Link>
                            <p>{product.description}</p>
                            <p>{product.price / 100} &#x20aa;</p>
                        </Card>
                    )
                })}
            </ProductsContainer>
        </div>
    )
}
export default HomePage

export const getStaticProps = async (props) => {
    const contentDirectory = `${process.cwd()}/content`
    const fileNames = fs.readdirSync(contentDirectory);
    const products = fileNames.map(filename => {
        //read the file
        const fileContent = fs.readFileSync(`${contentDirectory}/${filename}`).toString();
        // console.log(fileContent);
        //pull frontmatter => name (using npm i gray-matter)
        const { data } = matter(fileContent);
        // console.log(data);
        //return name & slug for each product
        const slug = `/products/${filename.replace('.md', '')}`;
        // console.log(slug);
        const product = {
            ...data,
            slug
        }
        // console.log(product);
        return product
    })

    return{
        props:{
            products
        }
    }
}