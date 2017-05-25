/* eslint-env node, mocha */
/* global expect*/

import {Person} from '../../src/person';

describe('Test', function () {
    'use strict';

    before(function () {

    });

    beforeEach(function () {

    });

    afterEach(function () {

    });


    it('should return the person name', function () {

        // Given
        let name = 'ronan';
        let p = new Person(name);


        // When
        let pname = p.getName();

        // Then
        expect(pname).to.equal(name);
    });
});
