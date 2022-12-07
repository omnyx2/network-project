


function FullSizeContentLayout ({children}) {
    const navSize = `calc(100% - 300px)`
    return (
        <div style={{width: navSize, display: 'block', padding: 8}}>
          {children}
        </div>
    )
}
export default FullSizeContentLayout