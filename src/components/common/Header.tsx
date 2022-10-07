import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return(
        <header>
            <Link href={'/'}>
                <a className="header-logo"><Image src="/tt4d_logo_lightmode-5fe67908805218a4475cf3c3963ee619.svg" width={222} height={40} layout={"fixed"} alt={"Creator Studio for TikTok Logo"}/></a>
            </Link>
            <nav>
                <button className="create-button">
                    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"></path></g></svg>
                    <span>Create</span>
                </button>
                <div className="menu-button">Log in with TikTok</div>
            </nav>
        </header>
    )
}

export default Header;