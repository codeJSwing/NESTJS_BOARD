<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest



## Installation

```bash
# nest client install
$ npm i -g @nest/cli

# install to current location
$ nest new ./

# check nest version
$ nest --version
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Use nest command
```bash
# use nestcli
$ nest

# generate
$ g

# controller schematic + controller name
$ controller + (name)

# do not make test code 
$ --no-spec
```

## Use Prettier in webstorm
```bash
# Languages & Frameworks -> Javascript -> Prettier
$ On 'Reformat Code' action [check]
```

## Prettier Setting
```bash
# 탭 간격
$ "tabWidth": 4

# 작은 따옴표 사용
$ "singleQuote": true

# 마지막 요소 뒤에 쉼표 사용
# (요소를 추가하거나 삭제할 때 코드 변경이 더 쉬워진다.)
$ "trailingComma": "all"

# 객체 리터럴에서 중괄호 사이에 공백 삽입
$ "bracketSpacing": true

# 객체 리터럴의 대괄호 {}를 같은 줄에 표시할지 여부를 지정
$ "bracketSameLine": true

# 문장 끝에 세미콜론을 삽입
$ "semi": true
```

## Nest JS 기본 구조 설명
`.eslintc.js`
- 개발자들이 특정한 규칙을 가지고 코드를 깔끔하게 짤수 있게 도와주는 라이브러리

`.prettierrc`
- 프로젝트의 코드 스타일을 정의하는 설정 파일 (코드 포맷터)

`nest-cli.json`
- nest 프로젝트를 위해 특정한 설정을 할 수 있는 json 파일

`tsconfig.json`
- typeScript 프로젝트의 설정 파일
- TypeScript 컴파일러에게 프로젝트를 어떻게 컴파일할지 알려주는 역할

`tsconfig.build.json`
- TypeScript 프로젝트에서 빌드 시에 필요한 특정한 설정을 담은 파일

`package.json`
- 프로젝트의 정보와 의존성 관리를 위한 설정 파일