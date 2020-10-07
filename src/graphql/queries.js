import { gql } from '@apollo/client';

const ALL_POKEMON = gql`
    query getPokemons {
        pokemons {
            name
            dexNumber
            typeOne
            typeTwo
        }
    }`
;

const POKEMON_PROFILE = gql`
    query getPokemonProfile($pokemon: String!) {
        pokemonProfile(id: $pokemon) {
            pokemon {
                name
                dexNumber
                typeOne
                typeTwo
            }
            ability {
                name
                description
                isHiddenAbility
            }
            pokedexEntry
            height
            weight
            classification
            maleRatio
            femaleRatio
            baseEggSteps
            baseHappiness
            captureRate
            effortValues
            weaknessNormal
            weaknessFire
            weaknessWater
            weaknessElectric
            weaknessGrass
            weaknessIce
            weaknessFight
            weaknessPoison
            weaknessGround
            weaknessFlying
            weaknessPsychc
            weaknessBug
            weaknessRock
            weaknessGhost
            weaknessDragon
            weaknessDark
            weaknessSteel
            weaknessFairy
            baseStatHp
            baseStatAttack
            baseStatDefense
            baseStatSpecialAttack
            baseStatSpecialDefense
            baseStatSpeed
            baseStatTotal
        }
    }`
;

export { ALL_POKEMON, POKEMON_PROFILE };