export default function filterFunc(str,list){
    console.log("filterFunc str",str)
        console.log("filterFunc list",list)
    if(list.length === 0 || str.length === 0){
        return list
    }

    const regex = new RegExp(str)
    const result = list.filter(note => note.name.search(regex) !== -1)
    console.log("filterFunc result",result)
    if(result.length > 0) return result
    else {
        return []
    }
}

//console.log(filterFunc("str",[{name: "abd"},{name:"str"},{name:"streee"}]))