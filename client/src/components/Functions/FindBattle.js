export const FindBattle = async (username, state) => {

    try {

        if (state.battle.battleOne.fighterOne.username === username) {
            return state.battle.battleOne
        }  else if (state.battle.battleOne.fighterTwo.username === username) {
            return state.battle.battleOne
        }  else if (state.battle.battleTwo.fighterOne.username === username) {
            return state.battle.battleTwo
        }  else if (state.battle.battleTwo.fighterTwo.username === username) {
            return state.battle.battleTwo
        }

    } catch (err) {
        console.log(err)
    }
}