import ProductsList from '../../components/ProductsList'

import {
  useGetActionGameQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGameQuery()

  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()

  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()

  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}
export default Categories
