import fs from "fs";
import matter from "gray-matter";
import  marked from "marked";
const Product = ({ product: { data, content }}) => {
    // console.log(props);
    const html = marked(content);
    return(
        <>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <p>{data.price / 100 }&#x20aa;</p>
            <hr/>
            <div dangerouslySetInnerHTML={{__html:html}}/>
        </>
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