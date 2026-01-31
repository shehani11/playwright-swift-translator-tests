const { test, expect } = require('@playwright/test');

const scenarios = [
    { id: 'Pos_Fun_01', input: 'mama vathura bonavaa', expected: 'මම වතුර බොනවා' },
    { id: 'Pos_Fun_02', input: 'hari,balamu.', expected: 'හරි,බලමු.' },
    { id: 'Pos_Fun_03', input: 'mama redhi vagayak dhaen hoodhanna yanavaa saha passee havas velaa kadeetath yanavaa.', expected: 'මම රෙදි වගයක් දැන් හෝදන්න යනවා සහ පස්සේ හවස් වෙලා කඩේටත් යනවා.' },
    { id: 'Pos_Fun_04', input: 'oyaa ethanata enavanam mama ethanata velaa balan innam.', expected: 'ඔයා එතනට එනවනම් මම එතනට වෙලා බලන් ඉන්නම්.' },
    { id: 'Pos_Fun_05', input: 'dhuvagena enna', expected: 'දුවගෙන එන්න' },
    { id: 'Pos_Fun_06', input: 'mama meeka gannadha?', expected: 'මම මේක ගන්නද?' },
    { id: 'Pos_Fun_07', input: 'api eeka hariyata karalaa.', expected: 'අපි ඒක හරියට කරලා' },
    { id: 'Pos_Fun_08', input: 'api heta yana chaarikaavata  ennee nahae', expected: 'අපි හෙට යන චාරිකාවට  එන්නේ නහැ' },
    { id: 'Pos_Fun_09', input: 'suba dhahavalak!', expected: 'සුබ දහවලක්!' },
    { id: 'Pos_Fun_10', input: 'karuNaakaralaa mata pothak ganna puLuvandha?', expected: 'කරුණාකරලා මට පොතක් ගන්න පුළුවන්ද?' },
    { id: 'Pos_Fun_11', input: '  mama udhee ATM ekata giyaa! eken Rs. 5000 k withdraw karaa, iita passee 7.30 AM office giyaa. Mama lunch time ekata  eLIyata giyaa, passee eeken rasama rasa bath ekak api kaeevaa. kaalaa ivara velaa aayeth office ekata aavaa. aevitha vaeda patan gaththaa.', expected: 'මම උදේ ATM එකට ගියා! එකෙන් Rs. 5000 ක් withdraw කරා, ඊට පස්සේ 7.30 AM office ගියා. මම lunch time එකට  එළියට ගියා, පස්සේ ඒකෙන් රසම රස බත් එකක් අපි කෑවා. කාලා ඉවර වෙලා ආයෙත් office එකට ආවා. ඇවිත වැඩ පටන් ගත්තා.' },
    { id: 'Pos_Fun_12', input: 'December 25 mama 5kg rice gaththa, 250ml kiri gaththa. edhaa hariyatama date eka 25/12/2025', expected: 'December 25 මම 5kg rice ගත්ත, 250ml කිරි ගත්ත. එදා හරියටම date එක 25/12/2025' },
    { id: 'Pos_Fun_13', input: 'puLuvannam mata Colombo office meeting ekee Teams link eka WhatsApp karanna', expected: 'පුළුවන්නම් මට Colombo office meeting එකේ Teams link එක WhatsApp කරන්න' },
    { id: 'Pos_Fun_14', input: 'suba udhaeesanak! , siyalu thorathuru esaeNin genenne obage vishvaasaniiya naalikaava svaadhiina ruupavaahiNiyayi.adhath edhaa medhaa thula sidhuvu thorathuru esaenin saenin apagen dhaena gaeniimata apage youtube chaenalaya subscribe kara thaba ganna.', expected: 'සුබ උදෑසනක්! , සියලු තොරතුරු එසැණින් ගෙනෙන්නෙ ඔබගෙ විශ්වාසනීය නාලිකාව ස්වාදීන රූපවාහිණියයි.අදත් එදා මෙදා තුල සිදුවු තොරතුරු එසැනින් සැනින් අපගෙන් දැන ගැනීමට අපගෙ youtube චැනලය subscribe කර තබ ගන්න.' },
    { id: 'Pos_Fun_15', input: 'mema BhaaShaava vasara dhahas gaNanaka ithihaasayak aethi, anuraaDhapura yugayee sita aKaNdava vikaashanaya vuuvaki. siQQhala BhaaShaavee praDhaana adhiyara thunak haDHAunaagatha haekiya: siQQhala praakRUtha (kri.puu. 3 - kri.va. 4), maDhYAkaaliina siQQhala (kri.va. 5 - 12), saha nuuthana siQQhala (kri.va. 13 sita adha dhakvaa).', expected: 'මෙම භාෂාව වසර දහස් ගණනක ඉතිහාසයක් ඇති, අනුරාධපුර යුගයේ සිට අඛණ්ඩව විකාශනය වූවකි. සිංහල භාෂාවේ ප්‍රධාන අදියර තුනක් හඳෞනාගත හැකිය: සිංහල ප්‍රාකෘත (ක්‍රි.පූ. 3 - ක්‍රි.ව. 4), මධ්‍යකාලීන සිංහල (ක්‍රි.ව. 5 - 12), සහ නූතන සිංහල (ක්‍රි.ව. 13 සිට අද දක්වා).' },
    { id: 'Pos_Fun_16', input: 'mata rupiyal 1000k dhenavadha?', expected: 'මට රුපියල් 1000ක් දෙනවද?'},
    { id: 'Pos_Fun_17', input: 'OMG, ehema lassanayi.', expected: 'OMG, එහෙම ලස්සනයි.' },
    { id: 'Pos_Fun_18', input: 'api gedhara yamu.', expected: 'අපි ගෙදර යමු.' },
    { id: 'Pos_Fun_19', input: 'inna inna', expected: 'ඉන්න ඉන්න' },
    { id: 'Pos_Fun_20', input: 'mama iiyee paasal giyaa', expected: 'මම ඊයේ පාසල් ගියා' },
    { id: 'Pos_Fun_21', input: 'api heta yamu', expected: 'අපි හෙට යමු' },
    { id: 'Pos_Fun_22', input: 'mama kanna yanavaa.oyaa enavadha?', expected: 'මම කන්න යනවා.ඔයා එනවද?' },
    { id: 'Pos_Fun_23', input: 'mata badagini. ', expected: 'මට බඩගිනි.' },
    { id: 'Pos_Fun_24', input: 'mama ATM ekata giyaa! Rs. 5000 withdraw karala, 7.30 AM office giyaa.', expected: 'මම ATM එකට ගියා! Rs. 5000 withdraw කරල, 7.30 AM office ගියා.' },


    { id: 'Neg_Fun_01', input: ' mamapansalyanneenahae', expected: 'මම පන්සල් යන්නේ නැහැ' },
    { id: 'Neg_Fun_02', input: 'මම @%# පන්සල් යන්නේ නැහැ', expected: 'මම පන්සල් යන්නේ නැහැ' },
    { id: 'Neg_Fun_03', input: 'pa2sala', expected: 'පාසල' },
    { id: 'Neg_Fun_04', input: 'wlcm machan.', expected: 'වෙල්කම් මචන්' },
    { id: 'Neg_Fun_05', input: 'I will come ', expected: 'මම එන්නම්' },
    { id: 'Neg_Fun_06', input: 'Mama haema avurudhdhema vage Nuwara Eliya yanavaa.  ee vageama, Sigiriya, Anuradhapura saha Polonnaruwa vage puraana nagara valatath yanavaa.', expected: 'මම හැම අවුරුද්දෙම වගෙ Nuwara Eliye යනවා. ඒ වගේම, Sigiriya, Anuradhapura සහ Polonnaruwa වගෙ පුරාන නගර වලටත් යනවා. ' },
    { id: 'Neg_Fun_07', input: ' siQQhala BhaaShaava indhu-aarYA BhaaShaa pavulata ayath vana athara, eya praDhaana vashayen shrii lQQkaavee siQQhala janathaavagee mav BhaaShaavayi.', expected: 'සිංහල භාෂාව ඉන්දු-ආර්ය භාෂා පවුලට අයත් වන අතර, එය ප්‍රධාන වශයෙන් ශ්‍රී ලංකාවේ සිංහල ජනතාවගේ මව් භාෂාවයි. ' },
    { id: 'Neg_Fun_08', input: 'mata wadhayak mea wada goda.', expected: 'මට වදයක් මේ වැඩ ගොඩ.' },
    { id: 'Neg_Fun_09', input: 'mamagedharayanavaa', expected: 'මම ගෙදර යනවා' },
    { id: 'Neg_Fun_10', input: 'lQQkaava kiyanne lokema thiyena lassanamath rataval valin ekak. Mea rata "Pearl of the Indian Ocean kiyala nikan nemei kiyanne.', expected: 'ලංකාව කියන්නෙ ලොකෙම තියෙන ලස්සනමත් රටවල් වලින් එකක්. මේ රට "Pearl of the Indian Ocean" කියල නිකන් නෙමේ කියන්නෙ.' },
    { id: 'pos_UI_01', input: 'mama', expected: 'මම' },

    










];

test.describe('Singlish Translation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { 
            waitUntil: 'load', 
            timeout: 60000 
        });
    });

    for (const data of scenarios) {
        test(`Testing ${data.id} - ${data.input}`, async ({ page }) => {
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            
            await page.waitForTimeout(2000);
            await inputField.fill(''); 
            await inputField.fill(data.input); 

            await page.waitForTimeout(5000); 

            const outputField = page.locator('.card').filter({ hasText: 'Sinhala' }).locator('div.whitespace-pre-wrap');
            const actualText = (await outputField.innerText()).trim();

            console.log(`Test ID: ${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualText}`);

            expect(actualText).toBe(data.expected);
        });
    }
});