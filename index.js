var gender = 0;

const checkReg = (pattern,str) => {
    let re = new RegExp(pattern)
    return re.test(str)
}

const updateSpan = (id,color,val) => {
    let sp = document.getElementById(id)
    sp.innerHTML = val
    sp.style.color = color
    sp.fontSize = "10px"
}

const capatalize = (event) => {
    let name =  event.target.value;
    name = name.trim()
    if ( checkReg('[a-zA-Z]+$',name) ) {
        let arr = name.split(" ")
        let data = ""
        for (let i=0;i<arr.length;i++) {
            if(arr[i]!= "")
                data = data + arr[i].slice(0,1).toUpperCase() + arr[i].slice(1)+" "
        }
        document.getElementById('name').value = data.slice(0,data.length - 1)
        updateSpan("form-error-name","","")
    }
    else {
        updateSpan("form-error-name","red","Please enter valid name!")
    }
}

const checkMail = (event) => {
    
}