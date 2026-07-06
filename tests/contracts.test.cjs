const { runStructuralTests } = require('../../midnight-modules/tests/structural-test-helper.cjs');
const path = require('path');

runStructuralTests('petProData', path.join(__dirname, '..', 'build', 'petProData', 'contract', 'index.d.ts'), {
  expected: ['deactivateAnimal', 'getAnimalRecord', 'grantFolderAccess', 'hasFolderAccess', 'isAnimalActive', 'logEmergencyAccess', 'proveResearchEligible', 'registerAnimal', 'revokeFolderAccess', 'setEmergencyPacket', 'setResearchConsent', 'transferOwnership'],
  mustHave: ['registerAnimal', 'transferOwnership', 'proveResearchEligible'],
});
