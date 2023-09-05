import { Form } from "../data/links";
import Input from "../components/build/input";

export default function Employee() {
//
// BUILDER
//
const formulaire = Form.slice(5, 10).map((item)=>(
  <>
    <Input type={item.type} icon={item.icon} text={item.text} />
  </>
));
//
//
//
    return (
<main>

</main>
    );
}