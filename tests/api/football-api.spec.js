import { test, expect } from "@playwright/test";

const baseUrl = "https://api.sportmonks.com/v3/football/coaches";
const tempToken = "C3o2QARkRsc9NLHRedYHThx2baABwklG72cIHM1Ps0OEu83cRzSmUNgwuxmd";

test("Should get all coaches validating structure", async ({ request }) => {
    const response = await request.get(`${baseUrl}?api_token=${tempToken}`);
    const responseData = await response.json();


    expect(response.ok()).toBeTruthy();
    expect(responseData.data[0].id).toBeDefined();
    expect(responseData.data[0].player_id).toBeDefined();
    expect(responseData.data[0].sport_id).toBeDefined();
    expect(responseData.data[0].country_id).toBeDefined();
    expect(responseData.data[0].nationality_id).toBeDefined();
    expect(responseData.data[0].common_name).toBeDefined();
    expect(responseData.data[0].firstname).toBeDefined();
    expect(responseData.data[0].lastname).toBeDefined();
    expect(responseData.data[0].display_name).toBeDefined();
    expect(responseData.data[0].image_path).toBeDefined();
    expect(responseData.data[0].height).toBeDefined();
    expect(responseData.data[0].weight).toBeDefined();
    expect(responseData.data[0].date_of_birth).toBeDefined();
    expect(responseData.data[0].gender).toBeDefined();
});

test("Should get all coaches with authentication on header", async ({ request }) => {
    const response = await request.get(`${baseUrl}`, {
        headers: { "Authorization": tempToken }
    });

    expect(response.ok()).toBeTruthy();
});