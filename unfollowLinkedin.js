// go to https://www.linkedin.com/feed/following/ and run this script in the console
// credits - https://github.com/brunolemos
// original recipe - https://gist.github.com/brunolemos/8e13c5472b0c07d795aa766423569546

(() => {
    let count = 0;

    function getAllButtons() {
        return document.querySelectorAll("button.is-following") || [];
    }

    async function unfollowAll() {
        const buttons = getAllButtons();

        for (let button of buttons) {
            count = count + 1;

            const name = button.parentElement.querySelector(
                ".follows-recommendation-card__name"
            ).innerText;
            console.log(`Unfollow #${count}:`, name);

            window.scrollTo(0, button.offsetTop - 260);
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