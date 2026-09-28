import Footer from "../components/footer";
import Header from "../components/header";

export default function Layout({ content }){
    return (
        <>
            <Header/>
            {content}
            <Footer/>
        </>
    )
}