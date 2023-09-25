//BUILDER
import Typo from "./global/typography";
import Img from "#components/build/global/img";
//
//
//
export default function Footer() {
//
//
//
    return (
<footer>
<Img 
    src="./assets/logo.png"
    alt="logo"
    className="logoBloc"
    sizeBloc="s4"
    sizeImg="s4"
/>
<Typo balise="span" size="s3" color="cb" >
© 2023 Wealth Health. All rights reserved
</Typo>
</footer>
    );
}