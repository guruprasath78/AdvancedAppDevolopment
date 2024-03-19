import React, { useState } from 'react';
import './products.css'

export default function Products() {
  let [array, setArray] = useState([]);
  let [inputdata, setInputdata] = useState({ name: "", prodid: "" ,desc:"",price:"",theme:""});
  let [index, setIndex] = useState();
  let [bolin, setBolin] = useState(false);
  let { name,prodid,desc,price,theme } = inputdata;

  function data(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  function addinputdata() {
    if (name === "" && prodid === "" && desc === "" && price === "" && theme === "" ) {
      alert("Enter all details");
    } else {
      setArray([...array, { name, prodid,desc,price,theme }]);
      setInputdata({ name: "", prodid: "" ,desc: "" ,price: "" ,theme: "" });
    }
  }

  // deleting row 
  function deletedata(i) {
    let total = [...array];
    total.splice(i, 1);
    setArray(total);
  }

  // updatedata
  function updatedata(i) {
    let { name,prodid,desc,price,theme } = array[i];
    setInputdata({ name,prodid,desc,price,theme });
    setBolin(true);
    setIndex(i);
  }

  //know add data at perticular index means update it on that index
  function updateinfo() {
    let total = [...array];
    total.splice(index, 1, { name,prodid,desc,price,theme });
    setArray(total);
    setBolin(false);
    setInputdata({ name: "", prodid: "" ,desc:"",price:"",theme:""});
  }

  return (
    <div className="gift-container">
      <div className="input-field">
        <input type="text" value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={data} />
        <input type="number" value={inputdata.prodid || ""} name="prodid" placeholder='Enter Product ID' onChange={data} />
        <input type="text" value={inputdata.desc || ""} name='desc' autoComplete='off' placeholder='Enter Description' onChange={data} />
        <input type="text" value={inputdata.price || ""} name='price' autoComplete='off' placeholder='Enter Price' onChange={data} />
        <input type="text" value={inputdata.theme || ""} name='theme' autoComplete='off' placeholder='Enter Theme' onChange={data} />
        <button  style={{height:'5vh', width:'100px'}} className="action-buttons" onClick={!bolin ? addinputdata : updateinfo}>{!bolin ? 'Add data' : 'Update data'}</button>
      </div>

      <div className="table-container">
        <table className='gift-table'>
          <tbody>
            <tr className='gift-tr'>
              <th className='gift-th'>Name</th>
              <th className='gift-th' >Product Id</th>
              <th className='gift-th'>Description</th>
              <th className='gift-th'>Price</th>
              <th className='gift-th'>Theme</th>
              <th className='gift-th'>Update</th>
              <th className='gift-th'>Delete</th>
            </tr>
            {array && array.map((item, i) => (
              <tr   className='gift-tr' key={i}>
                <td  className='gift-td'>{item.name}</td>
                <td  className='gift-td'>{item.prodid}</td>
                <td  className='gift-td'>{item.desc}</td>
                <td  className='gift-td'>{item.price}</td>
                <td  className='gift-td'>{item.theme}</td>
                <td  className='gift-td'><button style={{height:'5vh', width:'100px'}}  className="action-buttons" onClick={() => updatedata(i)}>Update</button></td>
                <td  className='gift-td'><button style={{height:'5vh', width:'100px'}} className="action-buttons" onClick={() => deletedata(i)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}