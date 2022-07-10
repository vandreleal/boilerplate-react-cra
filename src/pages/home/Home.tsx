import { FC } from "react"

import packageJson from "../../../package.json"
import * as S from "./Home.styles"

export const Home: FC = () => {
  const { dependencies, devDependencies } = packageJson

  const renderTable = (dependencies: { [s: string]: string }) => {
    return (
      <S.Table>
        <tbody>
          {Object.entries(dependencies).map(([dep, version]) => (
            <tr key={dep}>
              <td>{dep}</td>
              <td>{version}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    )
  }

  return (
    <S.Container>
      <h1>React Boilerplate</h1>
      <h2>dependencies</h2>
      {renderTable(dependencies)}
      <h2>devDependencies</h2>
      {renderTable(devDependencies)}
    </S.Container>
  )
}
