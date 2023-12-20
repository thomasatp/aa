import Logo from "./logo"

export default function Nav() {
    return (
        <div className="grid grid-cols-12 gap-6 p-6 fixed top-0 left-0 w-full z-50">
            <Logo/>
        </div>
    )
}