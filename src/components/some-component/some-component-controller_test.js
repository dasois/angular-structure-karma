/**
 * Created by dasa on 27.08.14.
 */
'use strict';

describe('Controller: someComponentCtrl', function () {
    beforeEach(module('someComponent'));

    var scope;
    var someComponentCtrl;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        someComponentCtrl = $controller('someComponentCtrl', {
            $scope: scope
        });
    }));

    it('should print hello world message', function () {
        expect(scope.message).to.equal("Hello World!");
    });
});
