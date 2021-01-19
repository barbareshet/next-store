import { useRouter } from "next/router";

const Name = () => {
const router = useRouter();
const {name}  = router.query;

    return (
        <div>
            <h1>Hello {name}, Welcome to Next Store</h1>
        </div>
    );
}
export default Name
