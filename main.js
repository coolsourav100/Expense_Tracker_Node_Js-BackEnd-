let form = document.getElementById('form')
let item = document.getElementById('item')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let name = document.getElementById('name').value
  let amount = document.getElementById('amount').value
  let des = document.getElementById('des').value
  let cat = document.getElementById('cat').value
  let obj ={
    'name':name,
    'amount':amount,
    'des':des,
    'cat':cat
  }
  axios.post("http://localhost:3000/",{...obj})
  .then((res)=>{
    showOndisplay()
    console.log(res.statusText)})
  .catch((err)=>console.log(err))
  let name1 = document.getElementById('name')
  let amount1 = document.getElementById('amount')
  let des1 = document.getElementById('des')
  let cat1 = document.getElementById('cat')
  name1.value = ''
  amount1.value = ''
  des1.value =''
  cat1.value = ''
  document.getElementById('btn').innerHTML = "Add Expences"
})

// Refresh on the screen
window.addEventListener("DOMContentLoaded",()=>{
  showOndisplay()
})

async function showOndisplay(){
  let list = document.getElementById('item')
  while (list.lastChild) {
    list.removeChild(list.lastChild);
  }
  let localdata = await axios.get("http://localhost:3000/")
  .then((res)=>{
    // console.log(res.data.map((ele)=>ele.obj))
    return res.data
  })
  .catch((err)=>console.log(err))
console.log(localdata)
localdata.map((ele)=>{
  // console.log(ele)
  let list = document.getElementById('item')
  let li = document.createElement('li')
  li.className = "list-group-item"
  li.textContent = `Name : ${ele.name}  Expences Amount : ${ele.amount}  Descriptation :${ele.des} Catagory : ${ele.cata}`
  
  // create Delete Button
  let deletebutton = document.createElement('button');
  deletebutton.textContent ='Delete'
  deletebutton.className ='btn btn-danger float-right ms-4'
  // Create Edit Button
  let editbtn = document.createElement('button')
  editbtn.textContent = 'Edit'
  editbtn.className ='btn btn-primary float-right ms-4'
  deletebutton.addEventListener('click',async ()=>{
    // console.log(ele._id)
     await axios.delete(`http://localhost:3000/${ele.id}`)
      list.removeChild(li)
      // location.reload()
      let name1 = document.getElementById('name')
  let amount1 = document.getElementById('amount')
  let des1 = document.getElementById('des')
  let cat1 = document.getElementById('cat')
  name1.value = ''
  amount1.value = ''
  des1.value =''
  cat1.value = ''
  })
  editbtn.addEventListener('click',async ()=>{
    document.getElementById('btn').innerHTML = "Edit"
    await axios.post(`http://localhost:3000/${ele.id}`)
      list.removeChild(li)
      let name = document.getElementById('name')
      let amount = document.getElementById('amount')
      let des = document.getElementById('des')
      let cat = document.getElementById('cat')
      name.value = ele.obj.name
      amount.value = ele.obj.amount
      des.value = ele.obj.des
      cat.value = ele.obj.cat
  })
  
  li.appendChild(editbtn)
  li.appendChild(deletebutton)
  list.appendChild(li)

  
})
}