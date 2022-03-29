function recipeanalyzer (recipe) {
    

    //search for lines with " гр."
    const arrayOfLines = recipe.split("\n")
    const arrayOfIngr =[] 
    
    const ingrConsolidated = []
    const ingrNames = []
    const uniqIngrNames = []
    const uniqIngrNamesWeights = []
    for(let i = 0; i < arrayOfLines.length; i++) 
    {
        
        const x = arrayOfLines[i].match(/^.+ +\d+ +гр\. *$/)
        if ( x != null) {
    arrayOfIngr.push(arrayOfLines[i])
        }
        }
//create arrey of arreys with ingridient name & weight
//create arrey of ingridiet names



for(let y = 0; y < arrayOfIngr.length; y++) {

const weightStart = arrayOfIngr[y].search(/\d+ +гр/)   
const weightEnd = arrayOfIngr[y].search(/ +гр/) 
const ingrName = arrayOfIngr[y].slice(0, weightStart - 1)
const ingrWeight = Number(arrayOfIngr[y].slice(weightStart, weightEnd))

ingrConsolidated.push([ingrName, ingrWeight])
console.log(ingrConsolidated)
ingrNames.push(ingrName)
}

// delete ingridients names duplicated
ingrNames.forEach((c) => {
     if (!uniqIngrNames.includes(c)) {
      uniqIngrNames.push(c)
    }
                   })
// add sum weight to each uniq ingridient name
uniqIngrNames.forEach((c) => {
    let weightsum = 0
for (let z = 0; z < ingrConsolidated.length; z++) {
   
   
    if (ingrConsolidated[z][0]===c) {
        weightsum = weightsum + ingrConsolidated[z][1]
    }


}
   uniqIngrNamesWeights.push([c, weightsum])
 })    

return uniqIngrNamesWeights

}

// const testtext = '1и 1гр\n2и 2гр\n'
// recipeanalyzer(testtext)


export {recipeanalyzer}