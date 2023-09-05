// LIEN
import { Links } from "#/data/links";
//BUILDER
import Button from "#components/build/global/button";
import Typo from "./global/typography";
import Img from "#components/build/global/img";
// REACT
import { useLocation } from 'react-router-dom';
//
//
//
export default function Header() {
//
//
//
const url = useLocation().pathname.split('/')[useLocation().pathname.split('/').length - 1];
//
// BUILDER
const bouton = (
    <>
{ url == Links[1].label ? (
    <Button
            variant="t2"
            fontSize="s1"
            item_i={true}
            href={Links[0].url}
            type="intern"
            children="Form"
    />
) : (
    <Button
            variant="t2"
            fontSize="s1"
            item_i={true}
            href={Links[1].url}
            type="intern"
            children="Employee"
    />
)

}
    </>
)


    return (
<header>
<Img 
    src="./assets/logo.png"
    alt="logo"
    className="logoBloc"
    sizeBloc="s7"
    sizeImg="s7"
    href={Links[0].url}
    type="intern"
/>
<div className="titleHeader">
<Typo balise="h1" size="s8" color="c2" transform="maj">
<span className="cb size-typo10">w</span>ealth <span className="cb size-typo10">h</span>ealth
</Typo>
<Typo balise="span" size="s5" color="c2" className="hrnet">
<span className="cb size-typo7 maj">HR</span>net
</Typo>
</div>
{bouton}
</header>
    );
}