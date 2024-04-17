import './LaunchCard.css'
export function LaunchCard({ launch }) {
  return (
    <>
      <div id='card-launch'>
        <h1 className='title'>{launch.name}</h1>
        <img className='patch' src={launch.links.patch.small} />
        {launch.success ? <p style={{ color: 'green' }}>Success</p> : <p style={{ color: 'red' }}>Fail</p>}
        {
          launch.details &&
          <p className='description'>{launch.details}</p>

        }
      </div >
    </>
  )
}