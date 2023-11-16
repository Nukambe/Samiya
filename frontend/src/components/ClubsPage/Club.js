export default function Club({ club }) {
    return (
        <div>
            <h3>{club?.name}</h3>
            <p><span>{club?.start}</span> - <span>{club?.end}</span></p>
        </div>
    )
}
