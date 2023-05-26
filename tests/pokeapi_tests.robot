*** Settings ***
Library           RequestsLibrary

*** Test Cases ***
Verificar Detalhes de um Pokémon
    Create Session    pokeapi    https://pokeapi.co/api/v2/
    ${response}    GET On Session    pokeapi    /pokemon/1    verify=${True}
    Should Be Equal As Strings    ${response.status_code}    200
    Should Contain    ${response.json()["name"]}    bulbasaur
    Should Contain    ${response.json()["types"][0]["type"]["name"]}    grass
    Should Contain    ${response.json()["types"][1]["type"]["name"]}    poison
    Delete All Sessions

Verificar Lista de Habilidades de um Pokémon
    Create Session    pokeapi    https://pokeapi.co/api/v2/
    ${response}    GET On Session    pokeapi    /pokemon/1    verify=${True}
    Should Be Equal As Strings    ${response.status_code}    200
    ${abilities}    Set Variable    ${response.json()["abilities"]}
    Log Many    ${abilities}    console=${True}
    Should Contain    ${abilities[0]["ability"]["name"]}    overgrow
    Should Contain    ${abilities[1]["ability"]["name"]}    chlorophyll
    Delete All Sessions

Verificar Status da API
    Create Session    PokeAPI    https://pokeapi.co/api/v2/
    ${response}    GET On Session    PokeAPI    /pokemon/1    verify=${True}
    Should Be Equal As Strings    ${response.status_code}    200
    ${json_data}    Set Variable    ${response.json()}
    Should Be Equal As Strings    ${json_data["name"]}    bulbasaur
    Should Be Equal As Strings    ${json_data["base_experience"]}    64
    Delete All Sessions
