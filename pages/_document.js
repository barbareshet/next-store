import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import {loadGetInitialProps} from "next/dist/next-server/lib/utils";

export default class MyDocument extends Document{

    static async loadGetInitialProps(ctx){
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try{
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles( <App {...props}/> ),
                });
            const initialPage = await Document.getInitialProps(ctx);
            return{
                ...initialPage,
                styles:(
                    <>
                        {initialPage.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
}