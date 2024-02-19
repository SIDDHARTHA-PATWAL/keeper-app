import React from "react";

function Footer(){
    const date=new Date();
    const year=date.getFullYear();
    return <Footer><p>Copyright © {year}</p></Footer>
}

export default Footer;