function recipeanalyzer (recipe) { 
  
    const arrayOfLines = recipe.split("\n")
    const arrayOfIngr =[] 
    const ingrConsolidated = []
    const ingrNames = []
    const uniqIngrNames = []
    const uniqIngrNamesWeights = []
    const uniqIngrNamesWeightsString = []
    const uniqIngrNamesWeightsStringOb = []
//search for lines with " гр."
    for(let i = 0; i < arrayOfLines.length; i++) 
    {
        
        const x = arrayOfLines[i].match(/^.+ +\d+ +гр.*$/)
        if ( x != null) {
    arrayOfIngr.push(arrayOfLines[i])
        }
    }

//create arrey of arreys with ingridient name & weight
//create arrey of ingridiet names
for(let y = 0; y < arrayOfIngr.length; y++) {

const weightStart = arrayOfIngr[y].search(/\d+ +гр/)   
const weightEnd = arrayOfIngr[y].search(/\d +гр/) + 1 
const ingrName = arrayOfIngr[y].slice(0, weightStart - 1)
const ingrWeight = Number(arrayOfIngr[y].slice(weightStart, weightEnd))

ingrConsolidated.push([ingrName, ingrWeight])

ingrNames.push(ingrName)
                                            }

// delete ingridients names duplicated
ingrNames.forEach((c) => {
     if (!uniqIngrNames.includes(c)) {
      uniqIngrNames.push(c)
    }
                   })
                   uniqIngrNames.sort(function (a, b) {
    return a.localeCompare(b);
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
   uniqIngrNamesWeightsString.push(c + ' - ' + weightsum + ' гр')  

   const tempOb = {ingridient: c + ' - ' + weightsum + ' гр'}
   uniqIngrNamesWeightsStringOb.push(tempOb)
 })    


return uniqIngrNamesWeightsStringOb
}

export {recipeanalyzer}