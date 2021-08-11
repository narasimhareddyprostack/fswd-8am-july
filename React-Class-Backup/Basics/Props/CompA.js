import CompB from "./CompB";
import CompC from "./CompC";
function CompA() {
  let name = "Rajni Kanth";
  let actressName = "Nayan";
  let emp = { name: "Narasimha", sal: 4555 };
  
  return (
    <>
      <h2>CompA Hero Name: {name} </h2>
      <hr />
      <CompB one={1} two="two" three="three" hero={name} heroin={actressName} />
      <hr />
      <CompC wish="Good Morning" employee={emp} />
    </>
  );
}
export default CompA;
