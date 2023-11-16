import NavigationLink from "./NavigationLink"

export default function NavBar() {
    return (
        <nav style={{
            position: 'sticky',
            top: '0px',
            width: '100%',
            height: '56px',
            backgroundColor: 'rgba(0, 255, 255, 0.7)',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'space-evenly',
            color: 'white'
        }}>
            <NavigationLink page={'home'} />
            <NavigationLink page={'stats'} />
            <NavigationLink page={'clubs'} />
            <NavigationLink page={'tournaments'} />
            <NavigationLink page={'awards'}/>
        </nav>
    )
}
