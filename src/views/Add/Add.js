import React, {useState} from "react";
import './Add.css'
import Back from "../../components/Back/Back";
import EmojiPicker from "emoji-picker-react";
import toast from "react-hot-toast";
function Add()
{
const [heading, setHeading] = useState("");
const [description, setDescription] = useState("");
const [emoji, setEmoji] = useState("");
const [openEmojiDialog, setOpenEmojiDialog] = useState(false);

const maNo = () =>{
const no = JSON.parse(localStorage.getItem('no'))|| [];

const noObj ={
    heading,
    description,
    emoji,
}

no.push(noObj);
localStorage.setItem('no',JSON.stringify(no))
toast.success('Note write successfully')
setHeading("");
setDescription("");
setEmoji("");

}

    return(
        <div>
        <h1 className="txc tp uo">Write Note 🖋️</h1>

<div className="ibc">
   
<input 
required='true'
type="text"
className="ter" 
placeholder="Heading" 
value={heading} 
 onChange={(e)=>{
    setHeading(e.target.value)
}} 
/>


</div>

<div className="ibc">
<input 
 type="text"
className="ter" 
placeholder="Description" 
value={description} 
onChange={(e)=>{
    setDescription(e.target.value)
}} 
/>

</div>

<div className="tero" onClick={()=>setOpenEmojiDialog(true)}>
    {emoji ? emoji : 'Select Emoji'} 
</div>




<EmojiPicker className="ter"
open={openEmojiDialog}
height={'500px'}
    SkinTonesDisabled={true}
    onEmojiClick={(emojiObject)=>{
        setEmoji(emojiObject.emoji)
        setOpenEmojiDialog(false)
    }}
    
/>
<button 
type="button"
className="bp lop"
onClick={maNo}
>
    Write note 🖋️
</button>


       <Back/>
        </div>
    )
}
export default Add