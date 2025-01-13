# Project-1-Economy-Clicker-Game
 Create by Vincent, Jake, Jerome, Jacobus

# Description
 This is a user based game to generate as much currency as they can to unlock all the upgrades.

# How to use
 Follow this link to access the application: https://vincentt94.github.io/Money-Maker/

# How to play
 A user can click on the dollar bill icon to generate currency.
 Once a user has earned enough currency to unlock and upgrade, they may click that upgrade to increase the rate at which their currency is generating.
 There are a limited number of unlockable upgrades, and the system will notify the user once they have reached the limit for a given upgrade.

# FYI
 A user's  currency and upgrade will be tracked while they remain on the webpage, even if they refresh it. However, if a user exits the page, their current session play though will be erased and they will begin with zero currency and zero purchased upgrades.

# Technologies
HTML5, CSS3, Javascript, Bootstrap

# Deep-Dive
We call all of our html variables at the top of the page so we can access them globally.
When the page is first opened, or refreshed, it checks for any currency(total money), clickValue(clicker increase rate), totalAutoGen(multiplicable rate that could have increased if upgrades were purchased), upgradeCosts(upgrade purchases count).
Based on the values grabbed, it then updates the totalText, which would update the total money value, and the Money per sec value on the webpage.
Now that the webpage is setup, it is ready for the user to click and accumlate money.

trying the update branch thing
