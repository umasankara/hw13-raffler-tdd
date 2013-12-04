describe "Raffler App", -> 
  raffleTDD = null
  beforeEach ->
    raffleTDD = window.Raffler.init()  
  it "should be able to initialize", ->    
    expect(raffleTDD.initialize()?).toEqual(true)      
  describe "Raffler Router", ->     
    it "should be able to initialize", ->
      expect(raffleTDD.router?).toEqual(true)   
  describe "Raffler Model", ->
    it "should be able to initialize", -> 
      expect(-> new Models.Entry()).not.toThrow(new TypeError("undefined is not a function"));
  describe "Raffler Collection", ->
    entryInColl = null
    coll = null
    it "should be able to initialize", ->     
      expect(-> new Collections.Entries()).not.toThrow(new TypeError("undefined is not a function"));
    it "should be able to add a new entry", ->
      coll = new Raffler.Collections.Entries()
      entryInColl = coll.create name: 'Joe'
      expect(coll.length).toEqual(1)
    it "should be able to delete an existing entry", ->
      entryInColl.destroy()
      expect(coll.length).toEqual(0)
  describe "Raffler View", ->
    entryInView = null
    it "should be able to initialize", ->
      expect(raffleTDD.appView?).toEqual(true)   
    it "should be able to add a new entry", ->
      currentCount = raffleTDD.appView.collection.length
      entryInView = raffleTDD.appView.addPerson('Moe')
      expect(raffleTDD.appView.collection.length).toEqual(currentCount+1) 
    it "should be able to select a winner", ->
      raffleTDD.appView.chooseWinner()
      expect(raffleTDD.appView.getWinner().length).toEqual(1)
    it "should be able to delete an entry", ->
      currentCount = raffleTDD.appView.collection.length
      #raffleTDD.appView.collection.at(raffleTDD.appView.collection.length-1).destroy()
      entryInView.destroy()
      expect(raffleTDD.appView.collection.length).toEqual(currentCount-1)
    it "should be able to reset the raffle", ->
      raffleTDD.appView.clearWinners()
      expect(raffleTDD.appView.getWinner().length).toEqual(0)
      
      
      
    
      
    
  
