import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchHeader({search}) {
    const [valueInput, setValueInput] = useState(''); //inputun içindeki değeri tutmak için bir state oluşturuyoruz. 
    //console.log(valueInput); //her inputa bir şey yazdığımızda bu değer değişecek. consolda görüyoruz

    const handleFormSubmit = (event) => {
        //formu submit ettiğimizde sayfanın refresh olmasını (yenilenmesini) engellemek için preventDefault kullanıyoruz. 
        event.preventDefault(); 
        search(valueInput)  //props olarak gelen search fonksiyonunu tetikliyoruz. app sayfasındaki handleSubmit metodunu tetiklemiş oluyoruz.
    }

    const handleChange = (event) => { 
        setValueInput(event.target.value); //inputun içine ne yazdıysak o değerin update olmasını sağlıyoruz. 
        //valueInput artık inputtan girdiğim değer oldu.
        // debugger; // gelen datayı kontrol etmek. debugger data ile çalışırken bir metoda geldiğimizde o metoda gelip gelmediğimizi kontrol etmek için kullanılır. yani onChange tetiklenerek debuggerın içerisine girer.     
    }
  return (
  <div className="searchDiv">
    <form onSubmit={handleFormSubmit}>{/*form submit olduğunda handleFormSubmit fonksiyonunu tetiklemek.*/}
        <label>Ne Arıyorsunuz?</label>
        <div className="inputContainer">
        <input value={valueInput} type="text" placeholder="Ara" onChange={handleChange}/> 
       <button className="icon"> <FontAwesomeIcon icon={faSearch} /></button>
       </div>
        
        {/*onChange ile inputun içindeki değer değiştiğinde handleChange fonksiyonunu çalıştırıyoruz. eğer yapmazsak boş string olarak kalır inputun içi.*/}

        
    </form>
  </div>
)
  }

export default SearchHeader;
