export const FilterData = async (obj, username) => {

    const response = [];

    
    for (let i = 0; i < obj.length; i++) {

        if (obj[i].battle.battleOne.fighterOne.username === username) {
            const info = {
                battle: obj[i].battle.battleTwo,
                pantheon: obj[i]._id
            }
           response.push(info)
        } else if (obj[i].battle.battleOne.fighterTwo.username === username) {
            const info = {
                battle: obj[i].battle.battleTwo,
                pantheon: obj[i]._id
            }
           response.push(info)
        } else if (obj[i].battle.battleTwo.fighterOne.username === username) {
            const info = {
                battle: obj[i].battle.battleOne,
                pantheon: obj[i]._id
            }
           response.push(info)
        } else if (obj[i].battle.battleTwo.fighterTwo.username === username) {
            const info = {
                battle: obj[i].battle.battleOne,
                pantheon: obj[i]._id
            }
           response.push(info)
        }
    }
  
    return response 
}