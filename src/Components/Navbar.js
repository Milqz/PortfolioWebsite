export default function Navbar(){
    return <div className="navContainer">
    <nav className="nav">
        <ul>
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/projects">Projects</CustomLink>
            <CustomLink href="/skills">Skills</CustomLink>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/contact">Contact</CustomLink>
        </ul>
    </nav>
    </div>
}

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === href ? 'active' : ''}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}