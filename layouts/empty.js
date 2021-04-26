import Footer from "../components/global/footer";

export default function EmptyLayout({ children }) {
    return (
        <>
            { children }
            <Footer />
        </>
    )
}