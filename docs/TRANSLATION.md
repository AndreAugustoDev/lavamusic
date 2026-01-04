# 🌍 Multilanguage Support for Lavamusic 🎶

Help us bring Lavamusic to the world!

We use **i18next** with a categorized folder structure to manage translations.

## 🌟 How to Add a New Language

1. 🔎 **Find the code:** Identify the ISO language code supported by Discord (e.g., `en-US`, `es-ES`, `fr`). You can find the list [here](https://discord.com/developers/docs/reference#locales).
2. 📁 **Create directory:** Create a new folder in `locales/` with your language code (e.g., `locales/fr/`).
3. 📋 **Copy source:** Copy all `.json` files from `locales/en-US/` into your new folder.
4. 🌐 **Translate:** Translate the strings in the JSON filesto the desired language.

### 📂 Directory structure

Your file structure should look like this:

```text
locales/
├── en-US/              (Source Language)
│   ├── commands.json   (Command names and descriptions)
│   ├── common.json     (UI buttons, generic errors, status)
│   ├── dev.json        (Developer tools)
│   ├── events.json     (Event messages)
│   └── player.json     (Music player responses)
├── es-ES/              (Your New Language)
│   ├── commands.json
│   ├── common.json
│   └── ...
```

### 📚 Available Translations

- [x] 🇺🇸 English (US) - `en-US` (Default)
- [ ] 🇧🇬 Bulgarian - `bg` (Not Started)
- [x] 🇨🇳 Chinese (CN) - `zh-CN` [by @appujet](https://github.com/Appujet) (Ai Translation - Not Accurate)
- [x] 🇹🇼 Chinese (TW) - `zh-TW` [by @apple050620312](https://github.com/apple050620312)
- [ ] 🇭🇷 Croatian - `hr` (Not Started)
- [ ] 🇨🇿 Czech - `cs` (Not Started)
- [ ] 🇩🇰 Danish - `da` (Not Started)
- [ ] 🇳🇱 Dutch - `nl` (Not Started)
- [ ] 🇬🇧 English (GB) - `en-GB` (Not Started)
- [ ] 🇫🇮 Finnish - `fi` (Not Started)
- [x] 🇫🇷 French - `fr` [by @LucasB25](https://github.com/LucasB25)
- [x] 🇩🇪 German - `de` [by @LucasB25](https://github.com/LucasB25)
- [ ] 🇬🇷 Greek - `el` (Not Started)
- [x] 🇮🇳 Hindi - `hi` [by @Appujet](https://github.com/Appujet) (Ai Translation - Not Accurate)
- [ ] 🇭🇺 Hungarian - `hu` (Not Started)
- [x] 🇮🇩 Indonesian - `id` [by @iaMJ](https://github.com/idMJA)
- [x] 🇮🇹 Italian - `it` [by @lori28167](https://github.com/lori28167)
- [x] 🇯🇵 Japanese - `ja` [by @hatry4](https://github.com/hatry4)
- [x] 🇰🇷 Korean - `ko` [by @hwangsihu](https://github.com/hwangsihu)
- [ ] 🇱🇹 Lithuanian - `lt` (Not Started)
- [x] 🇳🇴 Norwegian - `no` [by @appujet](https://github.com/Appujet) (Ai Translation - Not Accurate)
- [x] 🇵🇱 Polish - `pl` [by @InfNibor](https://github.com/infnibor) and [by @LucasB25](https://github.com/LucasB25)
- [ ] 🇧🇷 Portuguese (BR) - `pt-BR` (Not Started)
- [x] 🇵🇹 Portuguese (PT) - `pt-PT` [by @LucasB25](https://github.com/LucasB25)
- [ ] 🇷🇴 Romanian - `ro` (Not Started)
- [x] 🇷🇺 Russian - `ru` [by @LucasB25](https://github.com/LucasB25)
- [x] 🇪🇸 Spanish (ES) - `es-ES` [by @LucasB25](https://github.com/LucasB25)
- [ ] 🇸🇪 Swedish - `sv-SE` (Not Started)
- [x] 🇹🇭 Thai - `th` [by @fexncns](https://github.com/fexncns)
- [x] 🇹🇷 Turkish - `tr` [by @IlkayAksoy](https://github.com/IlkayAksoy)
- [ ] 🇺🇦 Ukrainian - `uk` (Not Started)
- [x] 🇻🇳 Vietnamese - `vi` [by @nhutlamm](https://github.com/nhutlamm) (Ai Translation - Not Accurate)

## 📝 Translation Guidelines

- **Do not** change the key names in the translation JSON file.
- **Do not** change the structure of the translation JSON file.
- **Do not** remove the `{}` tags from the strings.
- **Do not** add any new keys to the translation JSON file.

### Example

**Source (`en-US/commands.json`):**
```json
{
  "ping": {
    "description": "Shows the bot's latency.",
    "content": "Pinging...",
    "requested_by": "Requested by {author}"
  }
}
```

**Target (`hi/commands.json`):**
```json
{
  "ping": {
    "description": "बॉट का पिंग दिखाता है।",
    "content": "पिंगिंग...",
    "requested_by": "{author} द्वारा अनुरोधित"
  }
}
```

### 🏷️ Formatting tags for i18next

To ensure `{}` are not removed during translations, use the format tags: `["{", "}"]`.

## 🎉 Have a language to contribute?

1. Fork the repository.
2. Duplicate `locales/en-US` and rename the folder to your language code.
3. Translate the files.
4. Create a Pull Request!

## 📚 Resources

- [i18next Documentation](https://www.i18next.com/)
- [Discord Locales List](https://discord.com/developers/docs/reference#locales)
