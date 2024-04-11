import Link from 'next/link';
import { useState } from 'react';
import Onlines from './Onlines'

export default function Admin() {
  const [formData, setFormData] = useState({
    title: '',
    headline: '',
    img: '',
    youtube: '',
    content: ''
  });


const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
    ...prevState,
    [name]: value
  }));
};


  const handleAddData = async () => {
    const response = await fetch('/api/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Data added successfully");
      // Reset form or additional actions
    } else {
      alert("Failed to add data");

    }
  };

  return (

    <>
<div className="text-center mt-5">
<Onlines/>
</div>



    <div className='text-center w-50 mx-auto mt-5'>
<div className="mb-3">
  <label  className="form-label">title</label>
  <input name="title" className="form-control" value={formData.title} onChange={handleInputChange} placeholder="Title" />
</div>
<div className="mb-3">
  <label  className="form-label">Headline</label>
  <input name="headline" className="form-control" value={formData.headline} onChange={handleInputChange} placeholder="Headline" />
</div>
<div className="mb-3">
  <label  className="form-label">img</label>
  <input name="img" className="form-control" value={formData.img} onChange={handleInputChange} placeholder="Image URL" />
</div>
<div className="mb-3">
  <label  className="form-label">youtube</label>
  <input name="youtube" className="form-control" value={formData.youtube} onChange={handleInputChange} placeholder="Youtube ID" />
</div>
<div className="mb-3">
  <label  className="form-label">Headline</label>
  <input name="content" className="form-control" value={formData.content} onChange={handleInputChange} placeholder="Content"/>
  <button className='btn btn-info' onClick={handleAddData}>Add Data</button>

  <br /><br />
  <Link href="https://img.servermanagerads.com/" target='bank'>ฝากรูป</Link>
</div>
</div>


</>
      
    
  );
}
