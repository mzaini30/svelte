import { writeFileSync, existsSync, readFileSync } from "fs";
import { $ } from "zx";

const { parse } = JSON;

async function init() {
    const data = parse(readFileSync("android.json").toString());
    data.folder = "dist";
    await $`rm -rf android/app/src/main/assets`;
    await $`cp -r ${data.folder} android/app/src/main/`;
    await $`mv android/app/src/main/${data.folder} android/app/src/main/assets`;

    const file = {
        gradle: "android/app/build.gradle",
        strings: "android/app/src/main/res/values/strings.xml",
        layout: "android/app/src/main/res/layout/activity_main.xml",
        manifest: "android/app/src/main/AndroidManifest.xml",
    };

    function ubah(filenya, before, after) {
        let mulai = readFileSync(filenya).toString();
        mulai = mulai.replace(before, after);
        writeFileSync(filenya, mulai);
    }

    ubah(file.gradle, /applicationId ".+"/, `applicationId "${data.id}"`);
    ubah(file.manifest, /package=".+"/, `package="${data.id}"`);

    const idPecah = data.id.split(".");

    if (!existsSync(`android/app/src/main/java/${idPecah[0]}/`)) {
        await $`mkdir android/app/src/main/java/${idPecah[0]}/`;
    }
    if (!existsSync(`android/app/src/main/java/${idPecah[0]}/${idPecah[1]}/`)) {
        await $`mkdir android/app/src/main/java/${idPecah[0]}/${idPecah[1]}/`;
    }
    if (existsSync("android/app/src/main/java/com/user/app/")) {
        await $`mv android/app/src/main/java/com/user/app/ android/app/src/main/java/${idPecah[0]}/${idPecah[1]}/${idPecah[2]}/`;
    }
    if (idPecah[1] != "user") {
        await $`rm -rf android/app/src/main/java/com/user/`;
    }

    ubah(
        `android/app/src/main/java/${idPecah[0]}/${idPecah[1]}/${idPecah[2]}/MainActivity.java`,
        /package .+;/,
        `package ${data.id};`
    );


    ubah(
        file.strings,
        /<string name="app_name">.+<\/string>/,
        `<string name="app_name">${data.title}</string>`
    );
    ubah(
        file.gradle,
        /versionCode .+/,
        `versionCode ${data.version}`
    );
    ubah(
        file.gradle,
        /versionName ".+"/,
        `versionName "${data.version}"`
    );
}
init();