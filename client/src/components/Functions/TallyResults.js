export const TallyResults = async (battle) => {
    
    const fighterOne = battle.votesForFighterOne.length;
    const fighterTwo = battle.votesForFighterTwo.length;

    console.log(fighterOne, fighterTwo)

    if (fighterOne > fighterTwo) {
        const obj = {
            fighterOne: true,
            fighterTwo: false,
       

        };

        return obj

    } else if (fighterOne < fighterTwo) {
        const obj = {
            fighterOne: false,
            fighterTwo: true,
      

        };

        return obj
    } else if (fighterOne === fighterTwo) {
        if (battle.fighterOne.username === battle.winner) {
            const obj = {
                fighterOne: true,
                fighterFalse: false
            } 
            return obj
        } else if (battle.fighterTwo.username === battle.winner) {
            const obj = {
                fighterOne: false,
                fighterTwo: true
            }

            return obj
        }
   
    } 

}