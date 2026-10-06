import {useState}from "react";

function Home(){
  const[activeTab,setActiveTab]=useState("link");
  const[longUrl,setLongUrl]=useState("");
  const[alias,setAlias]=useState("");
  const[domain,setDomain]=useState("tinyurl.com");
  const[recentLinks,setRecentLinks]=useState([]);

const handleShorten=(e)=>{
    e.preventDefault();
    if(!longUrl)return alert("Please paste long URL");
    const shortCode=alias||Math.random().toString(36).substring(2,8);
    const newLink={long:longUrl,short:`https://${domain}/${shortCode}`};
setRecentLinks([newLink,...recentLinks]);
setLongUrl("");
setAlias("");
};

return(
    <div className="hero">
        <div className="hero-left">
            <h1>URL Shortener,Branded<br/><span>Short Links & Analytics</span></h1>
            <p>Welcome to the original link shortener...</p>
            <div className="hero-btns">
                <button>View Plans</button>
                <button>Create Free Account</button>
            </div>
        </div>
<div className="card">
    <form onSubmit={handleShorten}>
<label>Long URL</label>
<input type="text"placeholder="Paste long URL"value={longUrl}onChange={(e)=>setLongUrl(e.target.value)}/>
<div className="row">
    <div className="col">
<label>Domain</label>
<select value={domain}onChange={(e)=>setDomain(e.target.value)}>
<option>tinyurl.com</option>
<option>tiny.one</option>
</select>
</div>
<div className="col">
    <label>Alias</label>
    <input type="text"placeholder="Add alias"value={alias}onChange={(e)=>setAlias(e.target.value)}/>
</div>
</div>
<button type="submit">Shorten Link</button>
    </form>
</div>
    </div>
)
}
export default Home;