// go to https://www.linkedin.com/feed/following/ and run this script in the console
// credits - https://github.com/brunolemos
// original recipe - https://gist.github.com/brunolemos/8e13c5472b0c07d795aa766423569546

(() => {
    let count = 0;

    function getAllButtons() {
        return document.getElementsByClassName("artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view") || [];
    }

    async function unfollowAll() {
        const buttons = getAllButtons();

        for (let button of buttons) {
            count = count + 1;
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
    }

    async function run() {
        await unfollowAll();
        window.scrollTo(0, document.body.scrollHeight);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const buttons = getAllButtons();
        if (buttons.length) run();
    }

    run();
})();
