import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <div className="class-ninjas">
                <h1>NavBar</h1>
            </div>
            
            <link>
            </link>
            <Link href="/ninjas">
                <a>List Ninja</a>
            </Link>
        </nav>
    );
}

export default Navbar;