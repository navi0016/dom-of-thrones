function scene2() {


  // Setup Stage
  stage = document.querySelector('#stage')
  castle = document.querySelector('#castle')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)

  // Setup Cast

  //Ned
  nedContainer = document.createElement('div')
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '37%'
  nedContainer.style.top = '50%'
  nedContainer.style.left = '20%'
  stage.append(nedContainer)
  ned = document.querySelector('#ned')
  nedContainer.append(ned)
  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)

  ned.style.width = '70%'

  ned.style.position = 'absolute'
  ned.style.top = '55'
  leather.style.position = 'absolute'
  leather.style.bottom = 0

  //Joffrey
  joffContainer = document.createElement('div')
  joffContainer.id = 'joff-container'
  stage.append(joffContainer)
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '58%'
  joffContainer.style.left = '29%'

  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joff.style.width = '75%'
  joff.style.position = 'absolute'
  joff.style.left = '25%'

  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0

  // Setup Props

  // Sword
  sword = document.querySelector('#sword')


  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'


  // Prop 2

  // Action! Stab Joffrey with sword


  frame(function() {
    sword.style.top = '73%'
    sword.style.left = '21%'
  })

  frame(function() {
    sword.style.top = '72.5%'
    sword.style.left = '22.5%'
  })

  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '23.5%'
  })

  frame(function() {
    sword.style.top = '69%'
    sword.style.left = '24.5%'
  })

  frame(function() {
    sword.style.top = '67%'
    sword.style.left = '26%'
  })



// Action! Joffrey head falls in river

frame(function() {
  joffrey.style.top = 0
  joffrey.style.left = '33%'
  joff.style.transform = 'rotateZ(220deg)'

})

frame(function() {
  joffrey.style.top = '17%'
  joffrey.style.left = '90%'
  joff.style.transform = 'rotateZ(140deg)'

})

frame(function() {
  joffrey.style.top = '45%'
  joffrey.style.left = '160%'
  joff.style.transform = 'rotateZ(260deg)'

})

frame(function() {
  joffrey.style.top = '75%'
  joffrey.style.left = '230%'
  joff.style.transform = 'rotateZ(180deg)'

})

frame(function() {
  joffrey.style.top = '75%'
  joffrey.style.left = '300%'
  joff.style.transform = 'rotateZ(100deg)'

})
}
