import { useParams, Navigate } from "react-router-dom"
import logements from "../../logements.json"

export default function Housing() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if(!logement) {
    return <Navigate to="/error" replace />
  }

  return (
    <div>
        <h1>{logement.title}</h1>
    </div>
  )
}
