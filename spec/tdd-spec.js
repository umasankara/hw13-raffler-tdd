// Generated by CoffeeScript 1.6.3
(function() {
  describe("Raffler App", function() {
    var raffleTDD;
    raffleTDD = null;
    beforeEach(function() {
      return raffleTDD = window.Raffler.init();
    });
    it("should be able to initialize", function() {
      return expect(raffleTDD.initialize() != null).toEqual(true);
    });
    describe("Raffler Router", function() {
      return it("should be able to initialize", function() {
        return expect(raffleTDD.router != null).toEqual(true);
      });
    });
    describe("Raffler Model", function() {
      return it("should be able to initialize", function() {
        return expect(function() {
          return new Models.Entry();
        }).not.toThrow(new TypeError("undefined is not a function"));
      });
    });
    describe("Raffler Collection", function() {
      var coll, entryInColl;
      entryInColl = null;
      coll = null;
      it("should be able to initialize", function() {
        return expect(function() {
          return new Collections.Entries();
        }).not.toThrow(new TypeError("undefined is not a function"));
      });
      it("should be able to add a new entry", function() {
        coll = new Raffler.Collections.Entries();
        entryInColl = coll.create({
          name: 'Joe'
        });
        return expect(coll.length).toEqual(1);
      });
      return it("should be able to delete an existing entry", function() {
        entryInColl.destroy();
        return expect(coll.length).toEqual(0);
      });
    });
    return describe("Raffler View", function() {
      var entryInView;
      entryInView = null;
      it("should be able to initialize", function() {
        return expect(raffleTDD.appView != null).toEqual(true);
      });
      it("should be able to add a new entry", function() {
        var currentCount;
        currentCount = raffleTDD.appView.collection.length;
        entryInView = raffleTDD.appView.addPerson('Moe');
        return expect(raffleTDD.appView.collection.length).toEqual(currentCount + 1);
      });
      it("should be able to select a winner", function() {
        raffleTDD.appView.chooseWinner();
        return expect(raffleTDD.appView.getWinner().length).toEqual(1);
      });
      it("should be able to delete an entry", function() {
        var currentCount;
        currentCount = raffleTDD.appView.collection.length;
        entryInView.destroy();
        return expect(raffleTDD.appView.collection.length).toEqual(currentCount - 1);
      });
      return it("should be able to reset the raffle", function() {
        raffleTDD.appView.clearWinners();
        return expect(raffleTDD.appView.getWinner().length).toEqual(0);
      });
    });
  });

}).call(this);
