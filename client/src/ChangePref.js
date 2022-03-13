export  function toDark(){
    document.documentElement.style.setProperty('--color-bg','black')
    document.documentElement.style.setProperty('--color-text','white')
    document.documentElement.style.setProperty('--color-primary','#1f1f1f')
    document.documentElement.style.setProperty('--color-secondary','#2b2b2b')
    

}

export  function toLight(){
    document.documentElement.style.setProperty('--color-bg','#ecede8')
    document.documentElement.style.setProperty('--color-text','black')
    document.documentElement.style.setProperty('--color-primary','white')
    document.documentElement.style.setProperty('--color-secondary','#d4d4d2')
}