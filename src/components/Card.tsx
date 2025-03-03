const myStyle: React.CSSProperties = {
    // backgroundColor:"rgb(170, 214, 214)",
    maxWidth: "540px"
  };
const verse= `ete cāṁśa-kalāḥ puṁsaḥ
kṛṣṇas tu bhagavān svayam
indrāri-vyākulaṁ lokaṁ
mṛḍayanti yuge yuge`;

function Card(){
    return (<>
    <div className="card mb-3" style={myStyle}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          {verse}
        </p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </>);
}

export default Card;